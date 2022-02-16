export const label = (property) => {
  let temp = property
    .split('')
    .reduce((a, b) => (b == b.toUpperCase() ? `${a} ${b}` : a + b));
  return temp[0].toUpperCase() + temp.slice(1);
};

export const mapToSelectItems = (list, text, value) => {
  return (list = list.map((el) => {
    return { text: el[text], value: el[value] };
  }));
};

export const transformDate = (date) => {
  let time = Math.abs(new Date(date) - new Date()) / 1000;
  let what = 'second';
  if (time >= 86400) {
    time /= 86400;
    what = 'day';
  } else if (time >= 3600) {
    time /= 3600;
    what = 'hour';
  } else if (time >= 60) {
    time /= 60;
    what = 'minutes';
  }

  what += time == 1 ? '' : 's';
  return `${time.toFixed(0)} ${what} ago`;
};

export const communityAvatarImage = (src) => {
  return `http://localhost:3000/${src}`;
};

export async function subscribeUser() {
  if ('serviceWorker' in navigator) {
    let reg = await navigator.serviceWorker.ready;
    let sub = await reg.pushManager.subscribe({
      applicationServerKey: urlBase64ToUint8Array(
        'BBCJhz9zZnZCPmERIDeY_vz8H8HWMeiktLMtu93-6FlfvIgD_LZPc4y8VjUaOpHeOGmiJsKwmxwxqrsyzM6JhC0'
      ),
      userVisibleOnly: true,
    });
    return sub;
  }
}

function urlBase64ToUint8Array(base64String) {
  var padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  var base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');

  var rawData = window.atob(base64);
  var outputArray = new Uint8Array(rawData.length);

  for (var i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}


export async function addSubscriptionToServer() {
  let sub = await subscribeUser();
  const isUserAuthenticated = typeof sessionStorage.getItem('user') == 'string';
  let authUser = null;
  if (isUserAuthenticated) {
    authUser = JSON.parse(sessionStorage.getItem('user'));
  }

  const subObj = JSON.parse(JSON.stringify(sub));

  let subscriptionAdded = false;
  if (isUserAuthenticated) {
    subscriptionAdded = await fetch('http://localhost:3000/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
            mutation ADD_SUBSCRIPTION($userId: String!, $pushSubscriptionInput: PushSubscriptionInput!) {
              addedSubscription(userId: $userId, pushSubscriptionInput: $pushSubscriptionInput)
            }
            `,
        variables: {
          userId: authUser.id,
          pushSubscriptionInput: {
            subscription: {
              endpoint: subObj.endpoint.toString(),
              keys: {
                p256dh: subObj.keys.p256dh.toString(),
                auth: subObj.keys.auth.toString(),
              },
            },
          },
        },
      }),
    })
      .then((res) => res.json())
      .then((res) => res.data.addedSubscription);
  }
  return subscriptionAdded;
}


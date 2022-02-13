[string]$countries = gc .\countries.json
'db.countries.drop()' | mongosh
'db.countries.insertMany(' + $countries + ')' | mongosh
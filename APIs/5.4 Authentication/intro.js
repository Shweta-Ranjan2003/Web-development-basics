/*
 - Public API - 0 no authentication
1. Basic Authentication is required for some endpoints. Use your username and password to authenticate.
2. An API Key is requred to Authorize certain endpoints. Use the API key obtained from the 
/generate-api-key endpoint.
3. Bearer Token Authentication is required for some endpoints. Use your username and password to get 
a token obtained from the /get-auth-token endpoint.
*/

/*
No authentication is required.
GET
https://secrets-api.appbrewery.com/random
*/

/*
1. Basic Authentication - Username and password required to make api request
                          it is done usually using base64 encoding
secrets-api.appbrewery.com

now first register yourself by making post request on
https://secrets-api.appbrewery.com/register
and passing key parameter as username and password with value in postman
then click post you will be registered successfully
now 
make this get request on postman from get /all in website
https://secrets-api.appbrewery.com/all?page=1
but in authentication select basic auth and enter username is Shweta and pass as sde

note - go to header click hidden and copy authorization basic url
and paste it in base64decode.org website and see what is encoded and sended to website
it will show Shweta:sde

Authentication is used to verify that users really are who they represent themselves to be. 
Once this has been confirmed, Authorization is then used to grant the user permission to access 
different levels of information
*/

/*
2. An API Key obtained from the /generate-api-key endpoint.
GET https://secrets-api.appbrewery.com/generate-api-key
It will give us an apiKey use that to make request
then make get request from filter
https://secrets-api.appbrewery.com/filter
and in params write score and value 7 then
in authorization select api key
and write apiKey there and the key you got and select query param
to make request
*/

/*
3. Token Based Authentication
Make post request to get-auth-token
https://secrets-api.appbrewery.com/get-auth-token
add username password in body in postman to get token
use that token in authorization bearer token
on making get request on
https://secrets-api.appbrewery.com/secrets/2
now in header you will get bearer token in hidden header

*/

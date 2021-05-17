# Crack as a Service
Crack as a Service (CaaS) is an api that allows to search through the top 10k
most used passwords for the hash you want. The system is very fast as it doesn't
actually have to hash every password, it just uses a lookup system I made using [these scripts](https://github.com/l3gacyb3ta/CaaSScripts).  
For example, try this route:
```/api/sha256/3b9b05c720497601bfacaf66e58e8e37e3545ea9ab671665ad2e72e483c4872f```  
Which returns this:
```
{
  "solution":"brady"
}
```
So that's it!  
The current routes are:  
```/api/sha1/<shahash>```  Solves a sha1 hash  
```/api/sha1/<shahash>```  Solves a sha256 hash  
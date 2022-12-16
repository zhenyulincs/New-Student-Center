# Credentials Folder

## **Server and Database Info**
1. Server IP: 52.146.22.198
2. SSH username: azureuser
3. SSH private Key file name: csc648vm_key.pem
4. Database IP and port: csc648group5.postgres.database.azure.com:5432
5. Database username:csc648
6. Database password:zrk*vke-qkp-cbc7MXY
7. Database name: csc648group5


## **The steps for connecting the server via SSH:**


Tools:
<ul>
    <li>Windows: Powershell</li>
    <li>Mac: Terminal</li>
</ul>

1. Download the private key file to your machine, e.g. /Download
2. Open your Powershell or Terminal and cd to the directory where is the private key file stored. e.g. ```cd "PRIVATE KEY PATH"```
3. Type in the following Comment: ```ssh -i csc648vm_key.pem azureuser@52.146.22.198``` for the first time connect, the system will ask you "are you sure to continue?", the answer is yes.

## **The steps for connecting the database via SSH:**

1. Type in the following Comment: ```ssh -i csc648vm_key.pem azureuser@52.146.22.198``` to connect with the server
2. After successfully connect to the server, typing the following comment to connect the database```psql -U csc648 -h csc648group5.postgres.database.azure.com -p 5432 csc648```

The password prompt will pop up, and type in the password:```zrk*vke-qkp-cbc7MXY```


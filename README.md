# DC Sonar Frontend

It is part of the [dc-sonar](https://github.com/ST1LLY/dc-sonar) project.

## Deploy for development

### Windows

[Download](https://nodejs.org/download/release/v16.15.1/) and install Node.js v16.15.1.

Install Angular CLI version 14.0.2:

```powershell
npm install -g @angular/cli@14.0.2
```

Clone the [ntlm-scrutinizer](https://github.com/ST1LLY/ntlm-scrutinizer):

```bash
git clone https://github.com/ST1LLY/dc-sonar-frontend
```

Open Powershell.

Go to the created dc-sonar-frontend folder:

```
cd {YOUR_PATH}
```

Init the Angular project:

```powershell
npm install
```

## Run development

Execute in the dc-sonar-frontend folder:

```bash
ng serve --ssl
```

Open https://localhost:4200/.
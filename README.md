# discord-auto-gen-cmd 
This Discord bot automates command generation using LLM API. It helps to create commands faster, can be expanded even further.

## Requirements
- Node.js
- npm
- Discord.js
- nodemon (installed globally)
- groq api key ( can be modified to change ai api)

## Installation
```bash
npm install
npm install -g nodemon
```
### create config.json in the main directory
```bash
{
	"token": "",
	"clientId": "",
	"guildId": ""
}
```
### create .env file and insert groqapi key
```bash
GROQ_API_KEY = 
```
## Usage
Once dependencies are installed, start the bot:
```bash
nodemon index.js
```
### example
https://github.com/user-attachments/assets/2b8c20a2-f42d-4122-be88-eff091a2e0ae


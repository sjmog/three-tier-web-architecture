import App from '/src/App.js';
import Client from '/src/client.js';
import Server from '/src/server.js';
import Database from '/src/database.js';

const app = new App('main',
                  new Client(),
                  new Server(),
                  new Database()
                );

app.render();

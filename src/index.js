import app from './app';
import router from './router';

app.model(require('./models/example').default);
// app.model(require('./models/login').default);
app.router(router);
app.start('#root');

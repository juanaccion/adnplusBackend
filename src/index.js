const app = require('./app');

app.listen(app.get('port'), () => {
    console.log('Servidor escuchando puerto',app.get('port'));
});
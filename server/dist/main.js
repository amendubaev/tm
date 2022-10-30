"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const start = async () => {
    try {
        const PORT = process.env.PORT || 5001;
        const app = await core_1.NestFactory.create(app_module_1.AppModule);
        const config = new swagger_1.DocumentBuilder()
            .setTitle('API')
            .setDescription('TM API')
            .setVersion('0.1')
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, config);
        swagger_1.SwaggerModule.setup('api', app, document);
        await app.listen(PORT, () => console.log(`server started on PORT ${PORT}`));
    }
    catch (e) {
        console.log(e);
    }
};
start();
//# sourceMappingURL=main.js.map
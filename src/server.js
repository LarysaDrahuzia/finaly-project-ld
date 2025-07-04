// import express from 'express';
// import pino from 'pino-http';
// import cors from 'cors';
// import { getEnvVar } from './utils/getEnvVar.js';
// import router from './routers/index.js';
// import cookieParser from 'cookie-parser';
// import { errorHandler } from './middlewares/errorHandler.js';
// import { notFoundHandler } from './middlewares/notFoundHandler.js';
// import { UPLOAD_DIR } from './constants/index.js';
// import { swaggerDocs } from './middlewares/swaggerDocs.js';

// const PORT = Number(getEnvVar('PORT', '3000'));

// export const setupServer = () => {
//   const app = express();

//   app.use(
//     express.json({
//       type: ['application/json', 'application/vnd.api+json'],
//     }),
//   );
//   app.use(cors());

//   app.use(cookieParser());

//   app.use(
//     pino({
//       transport: {
//         target: 'pino-pretty',
//       },
//     }),
//   );

//   app.get('/', (req, res) => {
//     res.json({
//       message: 'Our contacts',
//     });
//   });

//   app.use(router);

//   app.use('/uploads', express.static(UPLOAD_DIR));

//   app.use('/api-docs', swaggerDocs());

//   app.use(errorHandler);

//   app.use(notFoundHandler);

//   app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
//   });
// };

export default {
  openapi: '3.0.0',
  info: {
    title: 'Provas Online',
    description: 'Documentação do projeto de uma api para realização de provas online',
    version: '1.0.0',
    contact: {
      name: 'Matheus Abreu',
      email: 'matheus.la1999@gmail.com',
      url: 'https://www.linkedin.com/in/matheus-abreu-js',
    },
  },
  tags: [
    {
      name: 'exams',
      description: 'Your Exams',
    },
    {
      name: 'questions',
      description: 'Your Questions',
    },
    {
      name: 'options',
      description: 'Question Options',
    },
  ],
  schemes: [
    'https',
    'http',
  ],
  paths: {
    '/exams': {
      post: {
        tags: [
          'exams',
        ],
        summary: 'Add a new exams',
        description: '',
        consumes: [
          'application/json',
          'application/xml',
        ],
        produces: [
          'application/xml',
          'application/json',
        ],
        parameters: [
          {
            in: 'body',
            name: 'body',
            required: true,
            schema: {
              $ref: '#/definitions/Exams',
            },
          },
        ],
        security: [
          {
            examsquestions_auth: [
              'write:examss',
              'read:examss',
            ],
          },
        ],
      },
      get: {
        tags: [
          'exams',
        ],
        summary: 'Get an existing exams',
        description: '',
        consumes: [
          'application/json',
          'application/xml',
        ],
        produces: [
          'application/xml',
          'application/json',
        ],
        security: [
          {
            examsquestions_auth: [
              'write:examss',
              'read:examss',
            ],
          },
        ],
      },
    },
    '/exams/:id': {
      put: {
        tags: [
          'exams',
        ],
        description: '',
        consumes: [
          'application/json',
          'application/xml',
        ],
        produces: [
          'application/xml',
          'application/json',
        ],
        parameters: [
          {
            in: 'body',
            name: 'body',
            required: true,
            schema: {
              $ref: '#/definitions/Exams',
            },
          },
        ],
      },
      get: {
        tags: [
          'exams',
        ],
        summary: 'Get an existing exams',
        description: '',
        consumes: [
          'application/json',
          'application/xml',
        ],
        produces: [
          'application/xml',
          'application/json',
        ],
        security: [
          {
            examsquestions_auth: [
              'write:examss',
              'read:examss',
            ],
          },
        ],
      },
      delete: {
        tags: [
          'exams',
        ],
        summary: '/:id',
        description: '',
        consumes: [
          'application/json',
          'application/xml',
        ],
        produces: [
          'application/xml',
          'application/json',
        ],
        security: [
          {
            examsquestions_auth: [
              'write:examss',
              'read:examss',
            ],
          },
        ],
      },
    },
    '/questions': {
      get: {
        tags: [
          'questions',
        ],
        produces: [
          'application/json',
        ],
        parameters: [],
      },
      post: {
        tags: [
          'questions',
        ],
        produces: [
          'application/xml',
          'application/json',
        ],
        parameters: [
          {
            in: 'body',
            name: 'body',
            description: 'order placed for purchasing the exams',
            required: true,
            schema: {
              $ref: '#/definitions/Questions',
            },
          },
        ],
      },
    },
    '/questions:id': {
      put: {
        tags: [
          'questions',
        ],
        description: '/:id',
        produces: [
          'application/xml',
          'application/json',
        ],
        parameters: [
          {
            in: 'body',
            name: 'body',
            required: true,
            schema: {
              $ref: '#/definitions/Questions',
            },
          },
        ],
      },
      delete: {
        tags: [
          'questions',
        ],
        description: '/:id',
        produces: [
          'application/xml',
          'application/json',
        ],
      },
    },
    '/options': {
      post: {
        tags: [
          'options',
        ],
        description: '',
        produces: [
          'application/xml',
          'application/json',
        ],
        parameters: [
          {
            in: 'body',
            name: 'body',
            description: 'order placed for purchasing the exams',
            required: true,
            schema: {
              $ref: '#/definitions/Options',
            },
          },
        ],
      },
    },
    '/options/:id': {
      delete: {
        tags: [
          'options',
        ],
        description: '/:id',
        produces: [
          'application/xml',
          'application/json',
        ],
      },
    },
  },
  definitions: {
    Questions: {
      type: 'object',
      properties: {
        id: {
          type: 'integer',
          format: 'int64',
        },
        exam_id: {
          type: 'uuid',
          example: 'uuid Exam id',
        },
        statement: {
          type: 'string',
          example: 'statementTeste',
        },
      },
      xml: {
        name: 'Questions',
      },
    },
    Exams: {
      type: 'object',
      required: [
        'name',
        'description',
        'type',
      ],
      properties: {
        id: {
          type: 'integer',
          format: 'int64',
        },
        name: {
          type: 'string',
          example: 'nameTeste',
        },
        description: {
          type: 'string',
          example: 'teste de geografia',
        },
        type: {
          type: 'string',
          example: 'ONLINE',
        },
      },
      xml: {
        name: 'Exams',
      },
    },
    Options: {
      type: 'object',
      properties: {
        question_id: {
          type: 'uuid',
          example: 'uuid Question id',
        },
        key: {
          type: 'string',
          example: 'a',
        },
        value: {
          type: 'string',
          example: 'valueTeste',
        },
        correct: {
          type: 'boolean',
          example: true,
        },
      },
      xml: {
        name: 'Options',
      },
    },
  },
};

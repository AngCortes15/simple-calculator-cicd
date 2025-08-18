# Proyecto Simple CI/CD

Este es un proyecto básico de Node.js para practicar CI/CD con GitHub Actions.

## Características

- 🧮 Calculadora simple con operaciones básicas
- ✅ Pruebas unitarias con Jest
- 🔍 Linting con ESLint
- 🚀 Pipeline CI/CD con GitHub Actions

## Instalación

```bash
npm install
```

## Scripts disponibles

- `npm test` - Ejecutar pruebas
- `npm run lint` - Verificar código con linter
- `npm start` - Ejecutar la aplicación
- `npm run build` - Compilar proyecto

## CI/CD Pipeline

El pipeline incluye:

1. **CI (Continuous Integration)**:
   - Pruebas en Node.js 18.x y 20.x
   - Verificación de linting
   - Ejecución de pruebas unitarias
   - Build del proyecto

2. **CD (Continuous Deployment)**:
   - Despliegue automático desde rama `main`
   - Despliegue simulado (puedes configurar tu propio destino)

## Uso

```javascript
const Calculator = require('./src/calculator');

const calc = new Calculator();
console.log(calc.add(2, 3)); // 5
```
# GenCore Studio - Plataforma Corporativa y Servicios Web

Sitio web oficial y portal de captación de **GenCore Studio**, una agencia de desarrollo de software a medida. Este proyecto representa la fachada digital del negocio, combinando un diseño de alta gama (UI/UX) con una arquitectura Fullstack diseñada para la conversión de leads, automatización de consultas y presentación dinámica de productos (como GenFit y GenBox).

## Arquitectura y Características Principales

* **Integración Backend y Base de Datos:** El sistema no es estático; está conectado a una base de datos relacional (Supabase/PostgreSQL) que gestiona de manera segura las interacciones del usuario, procesa las solicitudes entrantes del módulo `ContactPopup` y almacena el registro de clientes potenciales (Leads) para su posterior seguimiento.
* **Diseño UI/UX Inmersivo:** Implementación de interfaces interactivas premium utilizando efectos de Glassmorphism, fondos animados (`ParticleField`) y tarjetas de producto flotantes (`FloatingProductCard`) para destacar el valor de la ingeniería detrás de la marca.
* **Componentización Escalable:** Estructura modular construida en React. La división clara de componentes (`Hero`, `Services`, `Products`, `About`) permite iterar y escalar la plataforma rápidamente a medida que el estudio ofrece nuevos servicios.
* **Rendimiento Optimizado:** Desarrollo impulsado por Vite para minimizar los tiempos de carga y maximizar el SEO técnico, asegurando que la primera impresión de los clientes corporativos sea impecable.

## Stack Tecnológico

* **Frontend:** React 18, Vite
* **Backend y Base de Datos:** Supabase (PostgreSQL) / Gestión de API REST
* **Estilos:** CSS Modules y variables globales (`global.css`)
* **Librerías Visuales:** react-icons, animaciones CSS nativas.

## Instalación y Ejecución Local

Para visualizar y trabajar en el entorno de desarrollo:

1. Clona el repositorio:
   ```bash
   git clone [https://github.com/TuUsuario/gencore.git](https://github.com/TuUsuario/gencore.git)

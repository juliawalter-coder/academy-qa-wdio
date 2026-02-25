# 🚀 Ejercicios de Automatización con WebdriverIO (WEB)

Este proyecto contiene una serie de desafíos prácticos para aprender y dominar las pruebas de Frontend utilizando el framework **WebdriverIO** && **Appium**.
Por favor, no hagas uso de la IA, ya que el objetivo de este ejercicio es que aprendas las bases de Wdio.
Recuerda que para esta actividad puedes hacer uso de la doc de Wdio: https://webdriver.io/

Junto a esta actividad también vamos a practicar GitFlow, para eso tendrás que descargarte el proyecto.
En caso de no tener configurado SSH en este mismo repoisotiro hay un documento
que se llama CONFIG_SSH.md para configurarlo correctamente, ¡CUIDADO! ya que te descargarás la rama principal main, recuerda que cada actividad/ejercicio que hagas
tendrás que hacaerlo en una rama independiente (no uses commit desde el IDE, tiene que ser por comandos, eso os ayudará a entender cómo funcionan),
cada rama que crees tendrá el siguiente formato: nombre-apellidos-título-de-la-actividad, para apoyaros os comparto cómo funciona gitflow: https://globant.udemy.com/course/git-y-github-completo-desde-cero/

## Rules:

- Acuérdate de usar los Page Objects.
- Usa bien los describe & tests
- Usar principios SOLID

## 🟢 Nivel 1 – Click en botón

**📌 Objetivo:** Aprender a realizar un click y validar que este hace una acción.

Dado el siguiente path: /add_remove_elements

1. **Acción:** Hacer click en el botón `add element`.
2. **Resultado:** Verificar que aparece un botón con el texto `Delete`

## 🟡 Nivel 2 – Fill input

**📌 Objetivo:** Aprender a rellanar inpus, hacer click y validar que tiene una acción.

Dado el siguiente path: /forgot_password

1. **Acción:** Completar el input con la nueva password y hacer click en el botón `Retrive password`.
2. **Resultado:** Verificar que aparece otra ventana con el texto de Internal Server Error.

## 🟠 Nivel 3 – Open dropdown

**📌 Objetivo:** Aprender a seleccionar una opción del dropdown.

Dado el siguiente path: /dropdown

1. **Acción:** Abrir el dropwdown y seleccionar la opción 1 o 2 de forma aleatoria.
2. **Resultado:** Verificar qué opción está seleccionada.

## 🟠 Nivel 4 – Checkboxes

**📌 Objetivo:** Aprender a seleccionar un checkbox.

Dado el siguiente path: /checkboxes

1. **Acción:** Seleccionar el checkbox.
2. **Resultado:** Verificar qué opción está seleccionada.

## 🟠 Nivel 5 – Esperas explícitas

**📌 Objetivo:** Aprender a esperar a que un elemento se muestre.

Dado el siguiente path: /entry_ad

1. **Acción:** Esperar a que aparezca el modal y cerrarlo.
2. **Resultado:** Verificar que no se muestra el modal.

## Ejercicio Final 🏁

**🎯 Objetivo:** Implementar técnicas avanzadas de automatización para optimizar la mantenibilidad y escalabilidad del framework.

### El Desafío de Integración

Debes crear un flujo de pruebas que utilice:

1.  **`Hooks`**: Debes utilizar al menos uno de los diferentes hooks que hay en el fichero de configuración.
2.  **`Separación de responsabilidad`**: En caso de que sea necesario, separar las responsibiliades del test.
3.  **`Multi browser`**: El test tiene que pasar en todos los navegadores que se puedan implemntar con wdio.

El objetivo de esta **actividad final** es que seáis **creativos** y apliquéis **todo lo aprendido**, junto con otros conocimientos que hayáis adquirido consultando la **documentación oficial de Wdio**.

La idea principal de esta actividad es crear un e2e en alguna página web.

### 🔌 Webs propuestas

Os comparto algunas alternativas a la Web usada en clase:

- 👉 **Automation Exercise**  
   https://automationexercise.com/

- 👉 **Range HRM**  
   https://opensource-demo.orangehrmlive.com/web/index.php/auth/login

- 🚀 O, si os animáis, os invito a **crear vuestra propia Web**.

¡Mucho ánimo y a por ello! 💪🥋

---

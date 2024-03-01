# 📔 Portafolio de Evidencias

Si ya tienes tu [fork](#haz-un-fork-del-portafolio-de-evidencias) listo ✅, te dejo el [shortcut de ejercicios](#ejercicios) 😁

# ⚠️ ¡Atención!

Antes de comenzar, primero completa estas tareas:

### Haz un `fork` del [portafolio de evidencias](https://github.com/tlamabyte-code/angular-portafolio-ieca)

> **Fork**. Un **fork** es una copia independiente de un repositorio, en este curso <ins>lo vamos a utilizar para que tengas tu portafolio de evidencias en tu cuenta personal de github y puedas trabajar individualmente los ejercicios</ins>.

1. Visita el [link](https://github.com/tlamabyte-code/angular-102-portafolio-ieca)
2. Presiona el botón `Fork` lo encuentras en la parte superior derecha
3. Presiona el botón `Create fork` y listo ✅

# 1. Clonar tu Repositorio 

> **Clonar (`git clone`)**. Clonar un repositorio implica crear una copia local completa del repositorio remoto en tu máquina, <ins>necesario para que puedas trabajar tus ejercicios en tu entorno con VSCode y el resto de tecnologías del curso</ins>

1. Una vez creado el fork, dirígete al nuevo repositorio creado en tu cuenta personal (Busca en tus repositorios)
2. Presiona el botón `<> Code` y elige el protocolo HTTPS
> Si prefieres puedes elegir el protocolo **SSH (es un protocolo más comodo y seguro para trabajar)** te comparto la liga oficial de github con más información acerca del protocolo SSH. [Página oficial SSH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)
3. Copia la URL_DEL_REPOSITORIO que te arroja al presionar el botón `<> Code`
4. En tu máquina local, elige una ubicación donde quieras trabajar y ubícate con una `CMD` <sub>(windows)</sub> o `Terminal` <sub>(linux)</sub>
5. Ejecuta el comando `git clone URL_DEL_REPOSITORIO`
6. En caso de requerirse introduce tus credenciales y listo ✅

# 2. Crear tu Rama de Trabajo (evidencias)

> **Rama (branch) de Trabajo**. <ins>Tendrás que crear una rama de trabajo <strong>para que NO trabajes sobre la rama `master` directamente</strong></ins>, es un buen ejercicio para separar tu código/trabajo y puedas prácticar con git 👍

1. Ahora que tienes correctamente clonado tu repositorio 🥳 es hora de crear tu rama de trabajo.
2. En tu `CMD` <sub>(windows)</sub> o `Terminal` <sub>(linux)</sub> dirígete al repositorio clonado `cd ...`
3. Si quieres verificar que estas en la ubicación correcta puedes ejecutar `git branch`
  - La consola debería arrojarte algo como `* master`, el `*` indica en que rama te encuentras ubicado
4. Ejecuta `git checkout -b evidencias`
> **`git checkout -b ...`**. El comando `git checkout` <ins>permite moverte entre ramas</ins>, en este caso añadimos la bandera `-b` para indicarle a git que se trata de una nueva rama, git crea la rama y te mueve automáticamente a ella 
5. Publica tu rama `git push origin evidencias`
> **`git push`**. Un `git push` **normalmente se utiliza para publicar tus cambios a remoto**, <ins>en este caso lo único que estamos probando es publicar tu nueva rama para que se pueda visualizar remotamente</ins>


# 3. Primer Tarea
1. Posicionado en tu rama `evidencias`
2. Crea un archivo llamada yo.txt  
3. Edita el archivo e introduce tu nombre y hobbies
```
Mi nombre es Eduardo Muñoz

Me gustan los videojuegos en particular sagas/series como DKC o AoE,
disfuto de la arqueología mexicana y el visitar sitios de ese tipo en el país.
```

# Ejercicios

En esta sección encuentras los atajos de los READMEs de los ejercicios, cada ejercicio tendrá un README con las instrucciones esperadas 😉
| Módulo  | Link    |
| ------- | ------- |
| Git | [README](/1-git/README.md) |
| Fundamentos Web | [README](/2-fundamentos-web/README.md) |

## Notas Importantes ‼️
<h4>Durante el curso cada semana actualiza tu fork con el código <code>master</code> del repositorio oficial</h4>

### Actualizar tu Fork

Quizá te preguntes __¿Cómo es que puedo actualizar mi `fork` 🤔?__, <ins>durante el curso será necesario ya que el repositorio oficial irá actualizándose con nuevos ejercicios</ins>, cuando digo que el repositorio estará actualizándose me refiero a la rama `master` del [repositorio oficial](https://github.com/tlamabyte-code/angular-102-portafolio-ieca)

1. Si es la **primera vez que tienes que actualizar el `fork` tendrás que realizar algunas configuraciones de tu `fork` utilizando la línea de comandos de `git`**, <ins>si ya configuraste tu `upstream` entonces puedes saltar al paso 4</ins>.
2. Con una `CMD` <sub>(windows)</sub> o `Terminal` <sub>(linux)</sub> dirígete a la ubicación de tu repositorio
3. Crearemos algo llamado `upstream`, ejecuta `git remote add upstream https://github.com/tlamabyte-code/angular-102-portafolio-ieca`
> **Upstream**. Un `upstream` **será una conexión con el repositorio original**, <ins>necesario para que git sepa que origen tomará para realizar las actualizaciones</ins>
4. Antes de realizar la actualización, ejecuta `git branch` para asegurar que estas ubicado en tu rama de trabajo, es decir, la rama `evidencias`
  - La terminal debería arrojarte `* evidencias`, si no es así solo ejecuta `git checkout evidencias`
5. Ejecuta `git pull upstream master` y listo ✅

## Consejos 🦗
- Para los ejercicios con código, revisa los comentarios, ahí encuentras las instrucciones
- Si no logras llegar a los resultados, ve registrando tus `avances` en tu rama de trabajo para tener registro de tus evidencias

> La práctica hace al maestro 🎹  
> No te presiones, como mencionaba arriba intenta hacer los ejercicios 🧘🧘‍♀️

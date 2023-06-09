import { readdirSync } from 'fs';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';

const directoryPath = fileURLToPath(new URL('./', import.meta.url));

const files = readdirSync(directoryPath);

const userRoutes = [];

for (let index = 0; index < files.length; index++) {
    const element = files[index];

    const filePath = join(directoryPath, element);
    const { name } = parseFileName(element);

    if ((extname(element) === '.js' || extname(element) === '.mjs') && name !== 'index') {
        const module = await import(`file://${filePath}`);
        const routeModule = await module.default || module;

        if (typeof routeModule[name] !== 'undefined') {
            userRoutes.push(routeModule[name]);
        }
    }
    
}

export default userRoutes;

function parseFileName(file) {
    const parts = file.split('.');
    const extension = parts.slice(1).join('.');

    let name = file.replace(/.mjs|.js/g,'');
    const fileArray = name.split('.');
    if(fileArray.length>0){
        name = fileArray.reduce((accumulator, currentValue)=>{
            return `${accumulator}${currentValue.toLocaleLowerCase().charAt(0).toUpperCase()}${currentValue.slice(1)}`;
        });
    }

  return { name, extension };
}

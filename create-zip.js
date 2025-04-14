
const fs = require('fs');
const archiver = require('archiver');

const output = fs.createWriteStream('programa-ser.zip');
const archive = archiver('zip', {
  zlib: { level: 9 }
});

output.on('close', function () {
  console.log(archive.pointer() + ' total bytes');
  console.log('Arquivo ZIP criado com sucesso: programa-ser.zip');
});

archive.on('error', function(err){
  throw err;
});

archive.pipe(output);

// Adicionar pastas e arquivos essenciais
archive.directory('src/', 'src');
archive.directory('public/', 'public');
archive.file('package.json', { name: 'package.json' });
archive.file('vite.config.ts', { name: 'vite.config.ts' });
archive.file('tailwind.config.ts', { name: 'tailwind.config.ts' });
archive.file('README.md', { name: 'README.md' });

archive.finalize();

var appRoot = './wwwroot/';

var folders = {
    root: appRoot,
    style: appRoot + 'styles/',
    app: appRoot + 'app/',
    output: appRoot + 'dist/app'
};

var files = {
    style: folders.style + '**/*.scss',
    html: folders.root + '**/*.html',
    json: folders.app + '**/*.json',
    typescript: [folders.app + '**/*.ts', '!' + folders.app + '**/*.d.ts']
};

module.exports = {
    folder: folders,
    files: files
};
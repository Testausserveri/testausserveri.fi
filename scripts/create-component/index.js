const fs = require("fs")
const path = require("path")

async function copyDir(src, dest, componentName) {
    let entries = await fs.promises.readdir(src, { withFileTypes: true })

    for (let entry of entries) {
        let srcPath = path.join(src, entry.name)
        let destPath = path.join(dest, entry.name.replace("COMPONENT", componentName))

        if (entry.isDirectory()) {
            await copyDir(srcPath, destPath)
        } else {
            await fs.promises.copyFile(srcPath, destPath)
            const contents = await fs.promises.readFile(destPath, "utf-8")
            const rewrittenContents = contents.replace(new RegExp("COMPONENT", "g"), componentName)
            await fs.promises.writeFile(destPath, rewrittenContents)
        }
    }
}

async function main() {
    const componentName = process.argv[2]
    const destinationDir = path.join(__dirname, "../../components", componentName)
    
    console.log(destinationDir)
    
    if (fs.existsSync(destinationDir)) {
        console.error("Component directory already exists")
        process.exit(1)
    }
    
    fs.mkdirSync(destinationDir)
    
    copyDir(path.join(__dirname, "template"), destinationDir, componentName)

}

main()

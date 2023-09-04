let std1 = {
    name : 'anca',
    age : 10,
    programmingLang : ['js', 'php']
}

function Std1(name, age, programmingLang) {
    this.name = name;
    this.age = age;
    this.programmingLang = programmingLang;
}

let siswa1 = new Std1("r", 20, ["js"])
console.log(siswa1)
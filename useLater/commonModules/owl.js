module.exports = new class Owl {
    type = 'bird';
    voice = 'owoo';
    name = 'Hedwig';

    whatIs() {
        return this.type;
    }

    greeting() {
        return this.voice;
    }

    whoIs() {
        return this.name;
    }
}
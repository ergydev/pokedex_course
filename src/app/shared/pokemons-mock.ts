export class Pokemon {
    name: string;
    url: string;
    description: string;
    isDescriptionDisplayed: boolean = false;

    constructor(name: string, url: string, description: string) {
        this.name = name;
        this.url = url;
        this.description = description;
    }
    
}
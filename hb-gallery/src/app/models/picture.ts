import { SafeResourceUrl } from '@angular/platform-browser';

export class Picture{
    id: string="";
    name: string ="";
    description: string = "";
    roomId: string="";
    data: any;
    imageToShow: any;
    createDate!: Date;
    image: SafeResourceUrl | undefined;
}

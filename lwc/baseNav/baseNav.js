/**
 * @file-description  : 
 * @author            : Praveen Malviya
 * @last modified on  : 01-30-2023
 * @last modified by  : Praveen Malviya
**/
import { LightningElement, wire } from 'lwc';
import LoadData from '@salesforce/apex/LoadData.loadAccount';
import { NavigationMixin } from 'lightning/navigation';

export default class BaseNav extends NavigationMixin(LightningElement) {
    display;
    data;
    @wire(LoadData)
    wireData({data,error}){
        if (data) {
            this.data = data;
            console.log(data);
        }
    }
    load(){
        if (this.data) {
            this.display = this.data;
        }
    }
    handleNav(){
        console.log('click nav');
        this[NavigationMixin.Navigate]({
            type: "standard__component",
            attributes: {
                componentName: "c__navCmp"
            }
        });
    }
}
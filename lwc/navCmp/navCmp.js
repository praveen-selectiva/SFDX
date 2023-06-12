/**
 * @file-description  : 
 * @author            : Praveen Malviya
 * @last modified on  : 01-30-2023
 * @last modified by  : Praveen Malviya
**/
import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavCmp extends NavigationMixin(LightningElement) {
    display = 'hello text';
}
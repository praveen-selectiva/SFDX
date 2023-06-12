/**
 * @file-description  : 
 * @author            : Praveen Malviya
 * @last modified on  : 01-30-2023
 * @last modified by  : Praveen Malviya
**/
public with sharing class LoadData {
    @AuraEnabled(cacheable=true)
    public static list<Account> loadAccount(){
        try {
            return [select id, name from Account limit 10];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
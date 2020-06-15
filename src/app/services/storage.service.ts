import { Injectable } from '@angular/core';


@Injectable()

export class StorageService {
    
    key: string
    
         
    public async saveToStorage(key, val) {
        await localStorage.setItem(key, JSON.stringify(val))
    };
    
    public async loadFromStorage(key) {
        var val = await localStorage.getItem(key)
        return JSON.parse(val)
    };

}
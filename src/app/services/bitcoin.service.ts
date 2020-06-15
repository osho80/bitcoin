import { Injectable } from '@angular/core';
import axios from 'axios'
// import { Observable, BehaviorSubject, of } from 'rxjs';

@Injectable()

export class BitcoinService {
    
    key: string
    
    public async getRate(){
        
        const ratePrm = await axios('https://blockchain.info/tobtc?currency=USD&value=1') 
        console.log('rate from axios: ', ratePrm.data);
        
        return 1/ratePrm.data
        
    }

    public async getTradeVol() {
        const tradeVolPrm = await axios('https://api.blockchain.info/charts/trade-volume?timespan=3months&format=json&cors=true')
        return tradeVolPrm.data;
    }

    public async getMarketPrice(){
        const marketPricePrm = await axios('https://api.blockchain.info/charts/market-price?timespan=3months&format=json&cors=true')
        console.log('market Price from axios: ', marketPricePrm.data);
        return marketPricePrm.data;

    }

}

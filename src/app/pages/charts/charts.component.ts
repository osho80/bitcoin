import { Component, OnInit } from '@angular/core';
import {BitcoinService} from '../../services/bitcoin.service';
import {StorageService} from '../../services/storage.service';



@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  
  constructor(private bitcoinService: BitcoinService, private storageService: StorageService) { }

  tradeVolData={
    title:"",
    type:"LineChart",
    data:[],
    options:  {
      // width: 900,
      // height: 500,
      hAxis: {
        title: 'Date',
        
      },
      vAxis: {
        title: 'USD (Million)'
      },
      backgroundColor: '#f1f8e9'
    }
  }

  marketPriceData={
    title:"",
    type:"LineChart",
    data:[],
    options:  {
      // width: 900,
      // height: 500,
      hAxis: {
        title: 'Date',
        
      },
      vAxis: {
        title: 'USD (k)'
      },
      backgroundColor: '#f1f8e9'
    }
  }



  ngOnInit(): void {

    this.loadCharts()
  }

  async loadCharts(){
    let data = await this.bitcoinService.getTradeVol();
    this.tradeVolData.title = data.name;
    this.tradeVolData.data = data.values.map(unit=> [new Date(unit.x*1000).toString().substring(4, 15), unit.y/1000000])
    console.log('this.tradeVolData', this.tradeVolData);

    let data2 = await this.bitcoinService.getMarketPrice();
    this.marketPriceData.title = data2.name;
    this.marketPriceData.data = data2.values.map(unit=> [new Date(unit.x*1000).toString().substring(4, 15), unit.y/1000]);
    console.log('this.tradeVolData', this.marketPriceData);

  }


}


// <!-- new Date({{transaction.at}}).toString().substring(16,24) -->


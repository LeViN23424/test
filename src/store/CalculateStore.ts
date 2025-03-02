import { makeAutoObservable } from "mobx"
import { OpeningType,rollParameterType,rapportParameterType,Result } from "../types"


class CalculateStore{
    counterId:number = 1
    windows:OpeningType[] = []
    doorsId:number = 1
    doors:OpeningType[] = []
    rollParameter :rollParameterType = '1.06 x 10м'
    rapportParameter: rapportParameterType= '0'
    roomSquare:number = 0 
    areaPasting:number = 0
    wallpaperSquare : number  = 0
    rollQuantity:number = 0
    resultCalculated : boolean = false
    constructor(){
        makeAutoObservable(this)
    }
    switchRollParameter(parameter:rollParameterType){
        this.rollParameter = parameter
    }   
    switchRapportParameter(parameter:rapportParameterType){
        this.rapportParameter = parameter
    }
    addWindowSample() {
        const lastElement = this.windows[this.windows.length-1]
        if(!this.windows.length||(lastElement.width&&lastElement.height)){
            this.windows.push({width:0,height:0,id:this.counterId})
            this.counterId++
        }else {
            alert('Заполните параметры прошлого окна !')
        }
    }

    setWindowData(width:number,height:number,id:number){
       const window = this.windows.find(el=>el.id===id)
       if(window){
            window.width = width
            window.height = height
       }
    }
       
    removeWindow(id:number){
        this.windows = this.windows.filter(el=>el.id!==id)
    }


    addDoorSample() {
        const lastElement = this.doors[this.doors.length-1]
        if(!this.doors.length||(lastElement.width&&lastElement.height)){
            this.doors.push({width:0,height:0,id:this.counterId})
            this.counterId++
        }else {
            alert('Заполните параметры прошлой двери !')
        }
    }

    setDoorData(width:number,height:number,id:number){
       const door = this.doors.find(el=>el.id===id)
       if(door){
            door.width = width
            door.height = height
       }
    }
       
    removeDoor(id:number){
        this.doors = this.doors.filter(el=>el.id!==id)
    }

    calculateResult (results :Result){
        this.roomSquare = 2 * (+results.length * +results.height) + 2 * (+results.width * +results.height)
        const doorsSquare = this.doors.reduce((akb,el)=>{
            akb+=+el.width*+el.height
            return akb
        },0)
        const windowsSquare = this.windows.reduce((akb,el)=>{
            akb+=+el.width*+el.height
            return akb
        },0)
        const rapport = parseFloat(results.rapport) //в метрах 
        this.areaPasting = this.roomSquare - doorsSquare - windowsSquare
        const rollWidth = rapport === 0 
        ? parseFloat(results.roll.split(' ')[2]) * 1.06  // Если rapport равен 0, просто используем ширину 
        : parseFloat(results.roll.split(' ')[2]) * rapport * 1.06;
        
        this.rollQuantity = Math.ceil(this.areaPasting / rollWidth);
        this.wallpaperSquare =Math.ceil(rollWidth*this.rollQuantity)
        this.resultCalculated = true
    }

    resetCalculateResult(){
        this.resultCalculated = false
        this.rollQuantity = 0
        this.areaPasting = 0
        this.roomSquare = 0
        this.wallpaperSquare = 0
    }
}
export const calculateStore  = new CalculateStore()
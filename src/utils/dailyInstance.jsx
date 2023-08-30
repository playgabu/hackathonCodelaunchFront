import Daily from '@daily-co/react-native-daily-js';

export default class DailyInstance {
    static myInstance = null;
    _call = null;
    _callState = false;

    static getInstance() {
        if(DailyInstance.myInstance == null)
        {
            DailyInstance.myInstance = new DailyInstance()
        }
        return this.myInstance
    }

    getCall() {
        if(this._call == null)
        {
            this._call = Daily.createCallObject()
        }
        return this._call
    }

    finishCall() {
        this._call = null;
    }

    getCallState() {
        return this._callState
    }

    setCallState(state) {
        this._callState = state
    }
}
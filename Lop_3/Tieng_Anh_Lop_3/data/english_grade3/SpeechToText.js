class SpeechRecognizer {
    constructor({
        lang = "en-US",
        continuous = false,
        interimResults = false,
        timeout = 10000
    } = {}) {

        const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SR) {
            this.supported = false;
            console.warn("SpeechRecognition not supported");
            return;
        }

        this.supported = true;
        this.timeout = timeout;
        this.recognition = new SR();

        this.recognition.lang = lang;
        this.recognition.continuous = continuous;
        this.recognition.interimResults = interimResults;

        this.isRecognizing = false;
        this.finalTranscript = "";
        this._timer = null;
    }

    start() {
        if (!this.supported || this.isRecognizing) return;

        this.finalTranscript = "";
        this.isRecognizing = true;

        this.recognition.start();
        this._startTimeout();
    }

    stop() {
        if (!this.supported || !this.isRecognizing) return;
        this.recognition.stop();
        this._clearTimeout();
    }

    onResult(callback) {
        if (!this.supported) return;

        this.recognition.onresult = (event) => {
            let transcript = "";

            for (let i = event.resultIndex; i < event.results.length; i++) {
                transcript += event.results[i][0].transcript;
            }

            this.finalTranscript = transcript.trim();
            callback?.(this.finalTranscript, event);
        };
    }

    onEnd(callback) {
        if (!this.supported) return;

        this.recognition.onend = () => {
            this.isRecognizing = false;
            this._clearTimeout();
            callback?.(this.finalTranscript);
        };
    }

    onError(callback) {
        if (!this.supported) return;

        this.recognition.onerror = (event) => {
            this.isRecognizing = false;
            this._clearTimeout();
            callback?.(event);
        };
    }

    _startTimeout() {
        this._clearTimeout();
        this._timer = setTimeout(() => {
            this.stop();
        }, this.timeout);
    }

    _clearTimeout() {
        if (this._timer) {
            clearTimeout(this._timer);
            this._timer = null;
        }
    }
}

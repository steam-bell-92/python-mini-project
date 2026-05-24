/**
 * AudioController manages the sound effects for the application.
 * It handles loading, playing, and the global mute/unmute state.
 */
class AudioController {
    constructor() {
        this.sounds = {
            dice: 'https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3',
            coin: 'https://assets.mixkit.co/active_storage/sfx/2014/2014-preview.mp3',
            win: 'https://assets.mixkit.co/active_storage/sfx/2019/2019-preview.mp3',
            loss: 'https://assets.mixkit.co/active_storage/sfx/2020/2020-preview.mp3',
            click: 'https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3'
        };
        
        this.audioElements = {};
        this.isMuted = localStorage.getItem('audioMuted') === 'true';
        this.initialized = false;
    }

    /**
     * Initialize audio context/elements. 
     * Must be called after a user interaction to comply with browser policies.
     */
    init() {
        if (this.initialized) return;
        
        Object.keys(this.sounds).forEach(key => {
            const audio = new Audio(this.sounds[key]);
            audio.preload = 'auto';
            this.audioElements[key] = audio;
        });
        
        this.initialized = true;
        console.log('AudioController initialized');
    }

    /**
     * Play a sound by its key.
     * @param {string} key - The key of the sound to play.
     */
    play(key) {
        if (this.isMuted) return;
        
        // Ensure initialized if not already (safeguard)
        if (!this.initialized) {
            this.init();
        }

        const audio = this.audioElements[key];
        if (audio) {
            // Reset to start if already playing
            audio.currentTime = 0;
            audio.play().catch(err => {
                console.warn(`Could not play sound ${key}:`, err);
            });
        }
    }

    /**
     * Toggle the global mute state.
     * @returns {boolean} The new mute state.
     */
    toggleMute() {
        this.isMuted = !this.isMuted;
        localStorage.setItem('audioMuted', this.isMuted);
        return this.isMuted;
    }
}

// Export a singleton instance
const audioController = new AudioController();
window.audioController = audioController;

<script lang="ts">
  import { hour, minute, second } from '../store';

  let sDegree = 0;
  let mDegree = 0;
  let hDegree = 0;

  second.subscribe((value) => {
    sDegree = value * 6;
  });
  minute.subscribe((value) => {
    mDegree = value * 6;
  });
  hour.subscribe((value) => {
    hDegree = value * 30 + $minute / 2;
  });
</script>


<div class="clock">
  <div class="dot"></div>
  <div class="hands">
    <div class="hour-hand" style="transform: rotate({hDegree}deg)"></div>
    <div class="minute-hand" style="transform: rotate({mDegree}deg)"></div>
    <div class="second-hand" style="transform: rotate({sDegree}deg)"></div>
  </div>
</div>


<style>
  .clock {
    background-image: url("/cadrant.webp");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    padding: 10px;
    width: 80vmin;
    height: 80vmin;
    max-width: 540px;
    max-height: 540px;
    border-radius: 50%;
    border: 14px solid #181818;
    position: relative;
    box-shadow: 0 2vw 4vw -1vw rgba(0,0,0,0.8);
  }

  .dot {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #333;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    position: absolute;
    z-index: 10;
    box-shadow: 0 2px 4px -1px black;
  }

  .hands {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  .hour-hand {
    position: absolute;
    z-index: 5;
    width: 16px;
    height: 17vmin;
    max-height: 125px;
    background: #333;
    bottom: 50%;
    left: 50%;
    margin-left: -8px;
    border-radius: 10px;
    transform-origin: bottom;
  }

  .minute-hand {
    position: absolute;
    z-index: 6;
    width: 16px;
    height: 30vmin;
    max-height: 200px;
    background: #333;
    bottom: 50%;
    left: 50%;
    margin-left: -8px;
    border-radius: 10px;
    transform-origin: bottom;
  }

  .second-hand {
    position: absolute;
    z-index: 7;
    width: 2px;
    height: 40vmin;
    max-height: 270px;
    background: #0b5d8a;
    bottom: 50%;
    left: 50%;
    margin-left: -1px;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    transform-origin: bottom;
  }
</style>
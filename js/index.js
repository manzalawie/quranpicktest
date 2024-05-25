// Public variables
var paraghraph = document.getElementById("paragraph");
var audio = document.getElementById("audioSrc");
var previousNumber = null;
console.log(audio);
function changeAudio(source) {
  audio.src = `audio/${source}`;
  audio.setAttribute("controls", "controls");
}
function changeQuote() {
  // random var to choose a random number
  var randomNumber;
  // condition to return a random number from 1 to 10 again if randomNumber === previousNumber
  do {
    randomNumber = Math.floor(Math.random() * 10) + 1;
  } while (randomNumber === previousNumber);

  // equals the new randomNumber to the previousNumber
  previousNumber = randomNumber;

  if (randomNumber == 1) {
    changeAudio("002074.mp3");
    paraghraph.innerHTML = `ثُمَّ قَسَتْ قُلُوبُكُم مِّن بَعْدِ ذَٰلِكَ فَهِيَ كَالْحِجَارَةِ أَوْ أَشَدُّ قَسْوَةً ۚ وَإِنَّ مِنَ الْحِجَارَةِ لَمَا يَتَفَجَّرُ مِنْهُ الْأَنْهَارُ ۚ وَإِنَّ مِنْهَا لَمَا يَشَّقَّقُ فَيَخْرُجُ مِنْهُ الْمَاءُ ۚ وَإِنَّ مِنْهَا لَمَا يَهْبِطُ مِنْ خَشْيَةِ اللَّهِ ۗ وَمَا اللَّهُ بِغَافِلٍ عَمَّا تَعْمَلُونَ`;
  } else if (randomNumber == 2) {
    changeAudio("002255.mp3");
    paraghraph.innerHTML = `اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ`;
  } else if (randomNumber == 3) {
    changeAudio("002025.mp3");

    paraghraph.innerHTML = `وَبَشِّرِ الَّذِين آمَنُواْ وَعَمِلُواْ الصَّالِحَاتِ أَنَّ لَهُمْ جَنَّاتٍ تَجْرِي مِن تَحْتِهَا الأَنْهَارُ كُلَّمَا رُزِقُواْ مِنْهَا مِن ثَمَرَةٍ رِّزْقًا قَالُواْ هَذَا الَّذِي رُزِقْنَا مِن قَبْلُ وَأُتُواْ بِهِ مُتَشَابِهًا وَلَهُمْ فِيهَا أَزْوَاجٌ مُّطَهَّرَةٌ وَهُمْ فِيهَا خَالِدُونَ`;
  } else if (randomNumber == 4) {
    changeAudio("002038.mp3");

    paraghraph.innerHTML = `قُلْنَا اهْبِطُواْ مِنْهَا جَمِيعًا فَإِمَّا يَأْتِيَنَّكُم مِّنِّي هُدًى فَمَن تَبِعَ هُدَايَ فَلاَ خَوْفٌ عَلَيْهِمْ وَلاَ هُمْ يَحْزَنُونَ`;
  } else if (randomNumber == 5) {
    changeAudio("002043.mp3");

    paraghraph.innerHTML = `وَأَقِيمُواْ الصَّلاةَ وَآتُواْ الزَّكَاةَ وَارْكَعُواْ مَعَ الرَّاكِعِينَ`;
  } else if (randomNumber == 6) {
    changeAudio("002045.mp3");

    paraghraph.innerHTML = `وَاسْتَعِينُواْ بِالصَّبْرِ وَالصَّلاةِ وَإِنَّهَا لَكَبِيرَةٌ إِلاَّ عَلَى الْخَاشِعِينَ`;
  } else if (randomNumber == 7) {
    changeAudio("002048.mp3");

    paraghraph.innerHTML = `وَاتَّقُواْ يَوْمًا لاَّ تَجْزِي نَفْسٌ عَن نَّفْسٍ شَيْئًا وَلاَ يُقْبَلُ مِنْهَا شَفَاعَةٌ وَلاَ يُؤْخَذُ مِنْهَا عَدْلٌ وَلاَ هُمْ يُنصَرُونَ`;
  } else if (randomNumber == 8) {
    changeAudio("002058.mp3");

    paraghraph.innerHTML = `وَإِذْ قُلْنَا ادْخُلُواْ هَذِهِ الْقَرْيَةَ فَكُلُواْ مِنْهَا حَيْثُ شِئْتُمْ رَغَدًا وَادْخُلُواْ الْبَابَ سُجَّدًا وَقُولُواْ حِطَّةٌ نَّغْفِرْ لَكُمْ خَطَايَاكُمْ وَسَنَزِيدُ الْمُحْسِنِينَ`;
  } else if (randomNumber == 9) {
    changeAudio("002110.mp3");

    paraghraph.innerHTML = `وَأَقِيمُواْ الصَّلاةَ وَآتُواْ الزَّكَاةَ وَمَا تُقَدِّمُواْ لأَنفُسِكُم مِّنْ خَيْرٍ تَجِدُوهُ عِندَ اللَّهِ إِنَّ اللَّهَ بِمَا تَعْمَلُونَ بَصِيرٌ`;
  } else if (randomNumber == 10) {
    changeAudio("002125.mp3");

    paraghraph.innerHTML = `وَإِذْ جَعَلْنَا الْبَيْتَ مَثَابَةً لِّلنَّاسِ وَأَمْناً وَاتَّخِذُواْ مِن مَّقَامِ إِبْرَاهِيمَ مُصَلًّى وَعَهِدْنَا إِلَى إِبْرَاهِيمَ وَإِسْمَاعِيلَ أَن طَهِّرَا بَيْتِيَ لِلطَّائِفِينَ وَالْعَاكِفِينَ وَالرُّكَّعِ السُّجُودِ`;
  }
}

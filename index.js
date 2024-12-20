function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let key = arr[i]; // L'élément à insérer dans la séquence triée
      let j = i - 1;
  
      // Déplacez les éléments de arr[0..i-1] qui sont plus grands que key
      // d'une position vers la droite
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
      }
  
      // Insérez key à sa position correcte
      arr[j + 1] = key;
    }
  
    return arr; // Retourne le tableau trié
  }
  
  // Exemple d'utilisation
  let array = [12, 11, 13, 5, 6];
  console.log("Tableau avant tri :", array);
  let sortedArray = insertionSort(array);
  console.log("Tableau après tri :", sortedArray);
  
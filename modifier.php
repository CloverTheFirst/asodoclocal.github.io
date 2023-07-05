<?php
$name = $_POST['name'];

// Lecture du contenu du fichier doc.csv
$filename = 'doc.csv';
$contents = file_get_contents($filename);

// Recherche et modification de la ligne correspondante
$lines = explode("\n", $contents);
for ($i = 0; $i < count($lines); $i++) {
    $cells = explode(",", $lines[$i]);
    $nom = $cells[1];
    if ($name === $nom) {
        $lines[$i] = "##" . $lines[$i];
        break; // Sortir de la boucle une fois la ligne modifiée
    }
}

// Reconstruction du contenu CSV modifié
$modifiedContents = implode("\n", $lines);

// Écriture du contenu modifié dans le fichier doc.csv
file_put_contents($filename, $modifiedContents);
?>

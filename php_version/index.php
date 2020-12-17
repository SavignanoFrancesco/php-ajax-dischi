<?php include '../database/dischi.php' ?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>php - ajax - dischi</title>
        <link rel="stylesheet" href="../dist/app.css">
    </head>
    <body>
        <header>
            <img src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-logo-vector-download-11.png" alt="">
        </header>
        <main>
            <div class="container">
                <div class="cards-container">
                    <?php
                    foreach ($dischi as $disco) {
                        ?>
                        <div class="card">
                            <img src="<?php echo $disco['poster']; ?>" alt="">
                            <div class="bottom-card">
                                <h3><?php echo $disco['title']; ?></h3>
                                <em><?php echo $disco['author']; ?></em>
                                <p><?php echo $disco['genre']; ?></p>
                                <p><?php echo $disco['year']; ?></p>
                            </div>
                        </div>
                        <?php
                    }
                     ?>
                </div>
            </div>
        </main>
    </body>
</html>

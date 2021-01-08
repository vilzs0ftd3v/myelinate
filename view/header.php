
<!DOCTYPE html>
<html lang ="en">
<meta name = "charset">
<meta name = "viewport" content="width=device-width, initial-scale=1.0">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
    <!-- <script src="https://code.jquery.com/jquery-3.5.1.slim.js" integrity="sha256-DrT5NfxfbHvMHux31Lkhxg42LY6of8TaYyK50jnxRnM=" crossorigin="anonymous"></script> -->
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="public/css/style.css">
    <script src="public/js/sidebar.js"></script>
    <title>Myelination</title>
</head>
<body>

<?php Session::init(); ?>


      <!-- Navbar -->
<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="home" style="font-size: 1.1rem;">
      <img src="public/images/brain.svg" alt="logo" width="30" height="24">
      	Myelination
	  </a>
    
    

	  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      	<span class="navbar-toggler-icon"></span>
      </button>

	<div class="collapse navbar-collapse" id="navbarNav">
    <!-- Menu -->
      	<ul class="navbar-nav ms-auto">
	 
<?php if (Session::get('logIn') == false):?>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
		</li>
		<li class="nav-item">
          <a class="nav-link" href="login">Login</a>
		<!-- </li> -->
<?php endif; ?>

<?php if (Session::get('logIn') == true):?>
	<li class="nav-item">
  <li class="nav-item"><a style = "text-decoration:none; color:#212529;" href="dashboard"><?php echo Session::get('user'); ?></a></li>
	<input type="hidden" value="<?php echo Session::get('user_id'); ?>" id = "user_id">
  <input type="hidden" value="<?php echo Session::get('user'); ?>" id = "username">
		</li>
<?php endif; ?>

    <!-- End -->  
		</ul>
    </div>	

    </div>
</nav>

	

	
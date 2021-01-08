<?php if (Session::get('logIn') == false):?>
<br><br><br>
<div class="container">
    <div class="row">
      <div class="col col-md-4"></div>
      
      <div class="col col-10 col-md-4 shadow-sm p-3 mb-5 bg-white rounded"  style="padding:30px;">
      
          <h3 style="margin-bottom:10px;">Login</h3>
          <input style="margin-bottom:10px;" type="text" id="inputUsernameLogin" class="form-control" placeholder="Username" required/>
          <input style="margin-bottom:10px;" type="password" id="inputPasswordLogin" class="form-control" placeholder="Password" required/>
          <button class="btn btn-md btn-warning btn-block" type="submit" id = "login_btn">Sign in</button>
          <small>Click <a href="register">here</a> to register.</small>   
      </div>

      <div class="col col-md-4"></div>
    </div>
</div>

  <?php endif; ?>

<script src="view/login/js/default.js"></script>
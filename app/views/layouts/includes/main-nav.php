<nav ng-controller="NavCtrl" class="navbar navbar-default" role="navigation">
    <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="/">Larablog</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse navbar-ex1-collapse">
            <ul class="nav navbar-nav">
                <li ui-sref-active="active"><a ui-sref="home">Home</a></li>
                <li ui-sref-active="active"><a ui-sref="about">About</a></li>
                <li ui-sref-active="active" ng-if="loggedIn"><a ui-sref="blog.posts">Blog</a></li>
            </ul>

            <ul class="nav navbar-nav navbar-right">
                <!-- <li ng-if="! loggedIn" ui-sref-active="active"><a ui-sref="login">Login</a></li> -->
                <li ng-if="! loggedIn"class="dropdown" id="menuLogin">
                    <a class="dropdown-toggle" href="#" data-toggle="dropdown" id="navLogin">Login</a>
                    <div class="dropdown-menu" style="padding:17px;">
                        <form ng-submit="login()" id="login-form" class="form-horizontal" role="form">
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input name="email" ng-model="creds.email" type="text" class="form-control" required>
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input name="password" ng-model="creds.password" type="password" class="form-control" required>
                            </div>
                            <div class="form-group">
                                <button type="submit" class="btn btn-primary btn-block">Login</button>
                            </div>
                        </form>
                    </div>
                </li>
                <li ng-if="loggedIn"><a href="#" ng-click="logout($event)">Logout</a></li>
            </ul>
        </div><!-- /.navbar-collapse -->
    </div>
</nav>

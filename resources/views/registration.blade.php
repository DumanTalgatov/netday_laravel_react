<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf_token" content="{{csrf_token()}}">
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <!-- JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
    <title>Document</title>
</head>
<body>
    <h1>Registration</h1>

    <form action="{{route('user.registration')}}" method="POST" class="offset-4 col-3 rounded border" enctype="multipart/form-data">
        @csrf
        <div class="form-group">
            <label for="email" class="col-form-label-lg">Email address</label>
            <input type="email" name="email" id="email" class="form-control" placeholder="Email address" >
            @error('email')
                <div class="alert alert-danger">{{$message}}</div>
            @enderror
        </div>

        <div class="form-group">
            <label for="password" class="col-form-label-lg">Password</label>
            <input type="password" name="password" id="password" class="form-control" placeholder="Password">
            @error('password')
                <div class="alert alert-danger">{{$message}}</div>
            @enderror
        </div>

        <div class="form-group">
            <button class="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit">Sign Up</button>
        </div>
        <div class="text-center">If you have an account?

        <a class="small" href="{{url('login')}}">Sign In</a></div>
    </form>
</body>
</html>

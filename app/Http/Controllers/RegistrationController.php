<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use GuzzleHttp\Client;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Mail\InstructionMail;
use Illuminate\Support\Facades\Mail;

class RegistrationController extends Controller
{
    // save метод для регистрации
    public function save(Request $request){
        // валидация request
        $validator = Validator::make($request->all(),[
            'userName' => 'required|max:191',
            'surname' => 'required|max:191',
            'email' => 'required|email|max:191',
            'phoneNumber' => 'required|max:10|min:10',
            'country' => 'required|in:kz,uz,knr,kg',
            'university' => 'required|max:191',
            'major' => 'required|max:191',
            'course' => 'required|max:191',
        ]);

        /*
        если валидация неудачна, с помощью validate_err возвращаем ошибки
        validate_err в файле registrationForm.js является массивом который хранит эти ошибки
        */
        if($validator->fails()){
            return response()->json([
                'validate_err' => $validator->messages(),
            ]);
        }else{
            // если валидация удачна, просто через request добавляем записи
            $user = new User;
            $user->userName = $request->input('userName');
            $user->surname = $request->input('surname');
            $user->email = $request->input('email');
            $user->phoneNumber = $request->input('phoneNumber');
            $user->country = $request->input('country');
            $user->university = $request->input('userName');
            $user->major = $request->input('major');
            $user->course = $request->input('course');

            // с помощью request вылавливаем имэйл и отправляем туда сообщение (email send)
            $email = $request->input('email');
            Mail::to($email)->send(new InstructionMail());

            // только после (email send) сохраняем пользователя
            $user->save();

            // на console.log выводится в случае удачной регистрации и добавлении юзера в дб
            return response()->json([
                'status' => 200,
                'message' => 'User added succesfully',
            ]);
        }
    }

    /*
        Этот метод должен был реализовать платежку на сайте, но позже платежку отменили
    */
    public function saveApi(){
        // тут просто достаем имэйл с таблицы пользователей
        $types = DB::table('users')->pluck('email')->all();

        // здесь используется GuzzleHttp\Client, благодаря этому инструменту мы можем получать апишки
        // со сторонних приложений
        $client = new Client(['base_uri' => 'https://reqres.in/api/']);
        $response = $client->request('GET', 'users?page=2');
        $body = json_decode($response->getBody()->getContents());

        /*
        тут с помощью цикла мы достаем имэйлы, и если точно такой же имэйл есть и в респонзе
        апишки то статус платежа менялся на success.
        метод where сравнивает два параметра
        */
        foreach($body->data as $clientdata){
            User::where('email', $clientdata->email)->update([
                'status' => "success",
            ]);
        }
    }
}

<?php

// Composer: "fzaninotto/faker": "v1.3.0"
use Faker\Factory as Faker;

class PostsTableSeeder extends Seeder {

    public function run()
    {
        $faker = Faker::create();

        foreach(range(1, 10) as $index)
        {
            $title = ucwords( implode( ' ', $faker->words( rand(3, 5) ) ) );
            $paragraphs = $faker->paragraphs( rand(3, 5) );

            Post::create([
                'title' => $title,
                'excerpt' => $paragraphs[0],
                'body' => '<p>' . implode('</p><p>', $paragraphs) . '</p>',
            ]);
        }
    }

}

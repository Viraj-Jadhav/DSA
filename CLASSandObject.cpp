#include <iostream>
using namespace std;
class Hero
{
    // properties
public:
    int health;
    int getHealth()
    {
        return health;
    }
    void setHealth(int h)
    {
        health = h;
    }

    char level;
    // constructor
    Hero()
    {
        cout << " default constructor called" << endl;
    }
    // parameterised constructor
    Hero(int health)
    {
        this->health = health;
    }
    // destructor
    ~Hero()
    {
        cout << "distructor called" << endl;
    }
};
int main()
{
    // cout << "hi" << endl;
    // static
    Hero ramesh;
    // cout << "hello" << endl;
    // dynamic
    Hero *h = new Hero();
    return 0;
}

/*
    // creation of an object
    Hero h1;
    // cout << "size:" << sizeof(h1) << endl;
    cout << "h1 health is" : << h1.getHealth() << endl;
    // h1.health = 70;

    // use setter
    h1.setHealth(70);
    // h1.level = 'A';
    // cout << "health is" << h1.health << endl;
    cout << "health is" << h1.getHealth() << endl;

    // cout << "level is" << h1.level << endl;
    return 0;
}
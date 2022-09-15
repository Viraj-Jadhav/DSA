#include <iostream>
using namespace std;
class human
{
public:
    int height;
    int weight;
    int age;

public:
    int getage()
    {
        return this->age;
    }
    void setweight(int w)
    {
        this->weight = w;
    }
};
class male : public human
{

    string color;
    void sleep()
    {
        cout << "male sleeping" << endl;
    }
};
int main()
{
    male object1;
    cout << object1.age << endl;
    cout << object1.weight << endl;
    cout << object1.color << endl;
    object1.setweight(67);
    cout << object1.weight << endl;
    object1.sleep();
    return 0;
}
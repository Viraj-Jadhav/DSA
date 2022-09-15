#include <iostream>
using namespace std;
int main()
{
    int a = 10;
    int &r = a;
    int b = 15;
    r = b;
    cout << r << endl
         << a << endl;
    return 0;
}
#include <iostream>
using namespace std;
struct rectangle
{
    int length;
    int breadth;
    char x;
} r1;
int main()
{
    // struct rectangle r1 = {10, 5};
    r1.length = 15;
    r1.breadth = 10;
    cout << r1.length << endl;
    cout << r1.breadth << endl;
    cout << r1.length * r1.breadth << endl;
    return 0;
}

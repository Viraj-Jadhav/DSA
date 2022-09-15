#include <iostream>
#include <stdint.h>
#include <stdlib.h>
using namespace std;
int main()
{
    int *p, *q;
    int i;

    p = new int[5];
    p[0] = 2;
    p[1] = 4;
    p[2] = 6;
    p[3] = 7;
    p[4] = 9;
    q = new int[10];
    for (i = 0; i < 5; i++)
        q[i] = p[i];
    delete[] p;
    p = q;
    q = NULL;
    int n, o;
    p[5] = n;
    p[6] = o;
    cout << "Enter the sixth and seventh element" << endl;
    cin >> p[5] >> p[6];

    for (i = 0; i < 10; i++)
        cout << p[i] << endl;
    return 0;
}
#include <iostream>
#include <stdint.h>
#include <stdlib.h>
using namespace std;
int main()
{
    int *p, *q;
    int i, r;
    cout << "Enter lenght of the array" << endl;

    cin >> r;
    // cout << "Enter lenght of the array" << endl;

    p = new int[r];
    cout << "Enter elements in array" << endl;
    for (i = 0; i < r; i++)
    {
        cin >> p[i];
        // cout << p[i] << endl;
    }
    // cout << p[i] << endl;

    q = new int[r + 2];
    for (i = 0; i < r; i++)
        q[i] = p[i];
    delete[] p;
    p = q;
    q = NULL;
    int n, o;
    p[r] = n;
    p[r + 1] = o;
    cout << "Enter the sixth and seventh element" << endl;
    cin >> p[r] >> p[r + 1];

    for (i = 0; i < r + 2; i++)
        cout << p[i] << endl;
    return 0;
}
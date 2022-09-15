#include <iostream>
#include <stdlib.h>
using namespace std;
int max(int p[], int n)
{
    int i, max;
    max = p[0];
    for (i = 1; i < n; i++)
    {
        if (p[i] > max)
            max = p[i];
    }
    return max;
}
int linearsearch(int p[], int n, int key)
{
    int i;
    for (i = 0; i < n; i++)
    {
        if (key == p[i])
            return i;
    }
    return -1;
}
int insertinsorted(int p[], int n, int x)
{
    int i;
    i = n - 2;
    while (p[i] > x)
    {
        p[i + 1] = p[i];
        i--;
    }
    p[i + 1] = x;
    for (i = 0; i < n; i++)
    {
        cout << p[i] << endl;
    }
    return 0;
}
int main()
{
    int *p;
    int i, n, t;
    cout << "Enter lenght" << endl;
    cin >> n;
    p = new int[n];
    for (i = 0; i < n; i++)
    {
        cin >> p[i];
    }
    cout << "maximum element is" << endl;
    cout << max(p, n) << endl;
    cout << "element found at index" << endl;
    cout << linearsearch(p, n, 87) << endl;
    cout << "enter the element to insert" << endl;
    cin >> t;
    cout << insertinsorted(p, n, t) << endl;

    return 0;
}